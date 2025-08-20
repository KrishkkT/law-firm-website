// Form validation utility

export type ValidationError = {
  field: string
  message: string
}

// Validate consultation form
export function validateConsultationForm(formData: FormData): ValidationError[] {
  const errors: ValidationError[] = []

  // Validate name
  const name = formData.get("name") as string
  if (!name || name.trim().length < 2) {
    errors.push({
      field: "name",
      message: "Name must be at least 2 characters",
    })
  }

  // Validate email
  const email = formData.get("email") as string
  if (!email || !isValidEmail(email)) {
    errors.push({
      field: "email",
      message: "Please enter a valid email address",
    })
  }

  // Validate phone
  const phone = formData.get("phone") as string
  if (!phone || !isValidIndianPhone(phone)) {
    errors.push({
      field: "phone",
      message: "Please enter a valid Indian phone number",
    })
  }

  // Validate city
  const city = formData.get("city") as string
  if (!city || city.trim().length < 2) {
    errors.push({
      field: "city",
      message: "Please enter a valid city name",
    })
  }

  // Validate district
  const district = formData.get("district") as string
  if (!district) {
    errors.push({
      field: "district",
      message: "Please select a district",
    })
  }

  // Validate incident city
  const incidentCity = formData.get("incidentCity") as string
  if (!incidentCity) {
    errors.push({
      field: "incidentCity",
      message: "Please select a city of incident",
    })
  }

  // Validate message
  const message = formData.get("message") as string
  if (!message || message.trim().length < 10) {
    errors.push({
      field: "message",
      message: "Message must be at least 10 characters",
    })
  }

  return errors
}

// Validate contact form
export function validateContactForm(formData: FormData): ValidationError[] {
  const errors: ValidationError[] = []

  // Validate first name
  const firstName = formData.get("first-name") as string
  if (!firstName || firstName.trim().length < 2) {
    errors.push({
      field: "first-name",
      message: "First name must be at least 2 characters",
    })
  }

  // Validate last name
  const lastName = formData.get("last-name") as string
  if (!lastName || lastName.trim().length < 2) {
    errors.push({
      field: "last-name",
      message: "Last name must be at least 2 characters",
    })
  }

  // Validate email
  const email = formData.get("email") as string
  if (!email || !isValidEmail(email)) {
    errors.push({
      field: "email",
      message: "Please enter a valid email address",
    })
  }

  // Validate phone (optional but must be valid if provided)
  const phone = formData.get("phone") as string
  if (phone && !isValidIndianPhone(phone)) {
    errors.push({
      field: "phone",
      message: "Please enter a valid Indian phone number",
    })
  }

  // Validate message
  const message = formData.get("message") as string
  if (!message || message.trim().length < 10) {
    errors.push({
      field: "message",
      message: "Message must be at least 10 characters",
    })
  }

  return errors
}

// Sanitize user input to prevent XSS attacks
export function sanitizeInput(input: string): string {
  if (!input) return ""
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/`/g, "&#x60;")
    .replace(/\(/g, "&#40;")
    .replace(/\)/g, "&#41;")
}

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailRegex.test(email)
}

// Validate phone number format (Indian)
function isValidIndianPhone(phone: string): boolean {
  const phoneRegex = /^(\+91[-\s]?)?[0]?(91)?[6789]\d{9}$/
  return phoneRegex.test(phone)
}
