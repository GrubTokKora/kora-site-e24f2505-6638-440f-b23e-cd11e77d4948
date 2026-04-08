(() => {
    const config = window.KORA_SITE_CONFIG || {};
    const apiBaseUrl = (config.apiBaseUrl || "https://kora-agent.grubtok.com").replace(/\/+$/, "");
    const businessId = config.businessId || "e24f2505-6638-440f-b23e-cd11e77d4948";
    const recaptchaSiteKey = config.recaptchaSiteKey || "6LcsdJYsAAAAAAur-h7cYlZuGJTmijNHmOi5kFH7";

    function toTitleCase(value) {
        return (value || "")
            .toString()
            .replace(/[_-]+/g, " ")
            .replace(/\s+/g, " ")
            .trim()
            .replace(/\b\w/g, (char) => char.toUpperCase());
    }

    function setStatus(form, text, isError) {
        const statusEl = form.querySelector(".form-status");
        if (!statusEl) return;
        statusEl.textContent = text;
        statusEl.classList.remove("text-red-600", "text-green-600", "text-gray-text");
        statusEl.classList.add(isError ? "text-red-600" : "text-green-600");
    }

    function setSubmittingState(form, isSubmitting) {
        const submitBtn = form.querySelector('button[type="submit"]');
        if (!submitBtn) return;
        if (isSubmitting) {
            submitBtn.dataset.originalText = submitBtn.textContent || "Submit";
            submitBtn.textContent = "Sending...";
            submitBtn.disabled = true;
            submitBtn.classList.add("opacity-70", "cursor-not-allowed");
        } else {
            submitBtn.textContent = submitBtn.dataset.originalText || "Submit";
            submitBtn.disabled = false;
            submitBtn.classList.remove("opacity-70", "cursor-not-allowed");
        }
    }

    function getRecaptchaToken(form) {
        if (!recaptchaSiteKey || typeof grecaptcha === "undefined") return "";
        const recaptchaEl = form.querySelector(".g-recaptcha");
        if (!recaptchaEl) return "";
        return grecaptcha.getResponse() || "";
    }

    function collectFormData(form) {
        const formData = new FormData(form);
        const result = {};
        formData.forEach((value, key) => {
            result[key] = typeof value === "string" ? value.trim() : value;
        });

        const firstName = result.first_name || "";
        const lastName = result.last_name || "";
        const fullName = [firstName, lastName].filter(Boolean).join(" ").trim();
        if (fullName) {
            result.full_name = fullName;
        }

        const selectedDate = document.querySelector(".day-cell.selected");
        if (selectedDate && !result.appointment_date) {
            const monthLabel = document.getElementById("current-month");
            const monthText = monthLabel ? monthLabel.textContent.trim() : "";
            result.appointment_date = monthText ? `${monthText} ${selectedDate.textContent.trim()}` : selectedDate.textContent.trim();
        }

        const selectedTime = document.querySelector(".time-slot.selected");
        if (selectedTime && !result.appointment_time) {
            result.appointment_time = selectedTime.textContent.trim();
        }

        const selectedType = document.querySelector(".appointment-type.selected");
        if (selectedType && !result.appointment_type) {
            const type = selectedType.getAttribute("data-type") || "";
            result.appointment_type = type;
            result.appointment_type_label = toTitleCase(type);
        }

        return result;
    }

    async function submitPublicForm(form) {
        const formType = form.dataset.formType || "contact";
        const payloadData = collectFormData(form);
        const submitterEmail = payloadData.email || null;
        const captchaToken = getRecaptchaToken(form);

        if (!captchaToken) {
            setStatus(form, "Please complete the reCAPTCHA.", true);
            return;
        }

        const payload = {
            business_id: businessId,
            form_type: formType,
            form_data: payloadData,
            submitter_email: submitterEmail,
            captcha_token: captchaToken,
        };

        setSubmittingState(form, true);
        setStatus(form, "Sending...", false);

        try {
            const response = await fetch(`${apiBaseUrl}/api/v1/public/forms/submit`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error("Form submission failed");
            }

            form.reset();
            if (typeof grecaptcha !== "undefined") {
                grecaptcha.reset();
            }
            setStatus(form, "Thank you! Your submission has been received.", false);
        } catch (error) {
            setStatus(form, "Something went wrong. Please try again.", true);
        } finally {
            setSubmittingState(form, false);
        }
    }

    function initForm(form) {
        const recaptchaEl = form.querySelector(".g-recaptcha");
        if (recaptchaEl && recaptchaSiteKey) {
            recaptchaEl.setAttribute("data-sitekey", recaptchaSiteKey);
        }

        form.addEventListener("submit", async (event) => {
            event.preventDefault();
            await submitPublicForm(form);
        });
    }

    document.addEventListener("DOMContentLoaded", () => {
        const forms = document.querySelectorAll("form[data-form-type]");
        forms.forEach(initForm);
    });
})();
