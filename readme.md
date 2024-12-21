# Hugo GA Consent Banner

**hugo-ga-consent-banner** is a simple and customizable cookie consent banner for personal blogs using Hugo and Google Analytics. It ensures compliance with cookie usage regulations while offering an easy integration for blog owners.

---

## 🚀 Features

- Fully customizable message, button text, and links via `config.toml`.
- Pre-styled design included, and you're welcome to fork and modify.
- Easy toggle to enable/disable the banner.
- Compatible with modern Hugo versions.

---

## 📂 Installation

### **1. Add the Module to Your Hugo Site**
Run the following command in the root of your Hugo site:

```bash
hugo mod get github.com/dannberg/hugo-ga-consent-banner
```

This will import the module into your Hugo project.

### **2. Configure the Module**
Add the following to your site’s `config.toml`:

```toml
[module]
  [[module.imports]]
    path = "github.com/dannberg/hugo-ga-consent-banner"

[params.cookieConsent]
  enable = true  # Set to true to enable the banner
  message = "This website uses Google Analytics. Is that cool with you?" # Set custom message
  dismiss = "Sure!"
  learnMore = "Learn more"
  learnMoreLink = "/privacy-policy/"
```

### **3. Create Privacy Policy** (optional)
If you don't already have one, create a Privacy Policy page, located at `/privacy-policy/`. If you want to direct readers to a separate page in the consent banner instead, update the your `config.toml` with that URL.

For more information about Privacy Policy requirements, see Google's [Analytics Help](https://support.google.com/analytics/answer/7318509?hl=en) documentation. To generate your own Privacy Policy, you can try TermsFeed's [Privacy Policy Generator](https://app.termsfeed.com/wizard/privacy-policy) or use Google to find a similar tool. This is not legal advice.

### **4. Rebuild Your Site**
Run the following commands:

```bash
hugo mod tidy
hugo server
```

Visit your local site preview and confirm that the cookie consent banner appears as expected.

---

## 🛠️ Usage

- To **customize the text or links**, edit the `params.cookieConsent` values in your `config.toml` file.
- To **disable the banner**, set `enable` to `false`.
- To modify the design, fork this repository and adjust the CSS in `assets/css/cookie-banner.css`.

---

## 🐞 Bug Reports & 💡 Feature Requests

If you encounter issues or have ideas for enhancements, please:

1. [Open an issue](https://github.com/dannberg/hugo-ga-consent-banner/issues) in the GitHub repository.
2. Provide a clear description of the problem or feature request, including steps to reproduce if applicable.
3. Optionally, suggest a fix or improvement.

---

## 🤝 Contributions

We welcome contributions! Here’s how to get started:

1. Fork the repository.
2. Create a new branch for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and test thoroughly.
4. Commit your changes:
   ```bash
   git commit -m "Add a concise description of your changes."
   ```
5. Push your branch and submit a pull request:
   ```bash
   git push origin feature/your-feature-name
   ```

Please ensure your code adheres to the style and functionality of the existing project.

---

## 📜 License

This project is licensed under the [MIT License](https://github.com/dannberg/hugo-ga-consent-banner/blob/main/LICENSE).

---

## 🌐 Links

- **Repository**: [https://github.com/dannberg/hugo-ga-consent-banner](https://github.com/dannberg/hugo-ga-consent-banner)
- **Hugo Documentation**: [https://gohugo.io/documentation/](https://gohugo.io/documentation/)
