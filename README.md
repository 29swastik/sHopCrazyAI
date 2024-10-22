# 🛍️ E-commerce Helper Extension 🛠️

E-commerce Helper Extension is a Chrome extension designed to enhance the shopping 🛒 experience by providing educational 📚 tooltips 💬 on product 📦 pages. It highlights ✨ predefined technical terms 📝 and provides informative tooltips that explain these terms, helping users better understand product specifications.

## ✨ Features
- Highlights predefined terms like "🖥️ RAM", "💾 SSD", and "📺 4K" found on e-commerce product pages.
- Displays informative tooltips 💡 when users hover 🖱️ over the highlighted terms.
- Tooltip provides concise explanations 📝 for technical terms, aiding user understanding 🤓.

## 📸 Demo
![image](https://github.com/user-attachments/assets/b6640534-7a50-412e-8474-0d8c904e6812)

## ⚙️ Installation
1. **Clone the repository**:
   ```sh
   git clone https://github.com/yourusername/chrome-extension-educational-tooltips.git
   ```
2. **Open Chrome** and navigate to `chrome://extensions/`.
3. **Enable Developer Mode** by toggling the switch in the upper right corner.
4. Click **Load unpacked** 📂 and select the cloned repository's folder.
5. The extension will be loaded and available for use.

## 📂 Directory Structure
```
chrome-extension/
  |-- manifest.json
  |-- content.js
  |-- styles.css
```
- **manifest.json**: Defines the extension's properties, permissions, and scripts 📜.
- **content.js**: Contains the logic 🧠 for identifying and highlighting terms, as well as displaying tooltips.
- **styles.css**: Defines styles 🎨 for the highlighted terms and tooltips.

## 📘 Usage
1. Navigate to an e-commerce website 🌐.
2. The extension will automatically highlight predefined technical terms on the page.
3. Hover over the highlighted term to see a tooltip with more information ℹ️.

## 📄 Example Terms Highlighted
- **🖥️ RAM**: Random Access Memory, a type of computer memory that can be accessed randomly.
- **💾 SSD**: Solid State Drive, a storage device that uses flash memory.
- **📺 4K**: A resolution standard used by modern TVs and monitors, roughly 4000 pixels wide.

## 🛠️ Customization
The current version of the extension uses hardcoded terms and definitions. You can easily customize the terms by editing the `hardcodedTerms` dictionary in `content.js`:
```javascript
const hardcodedTerms = {
  "RAM": "Random Access Memory, a type of computer memory that can be accessed randomly.",
  "SSD": "Solid State Drive, a storage device that uses flash memory.",
  "4K": "A resolution standard used by modern TVs and monitors, roughly 4000 pixels wide."
};
```

## 👨‍💻 Development
1. **Clone the repository**.
2. **Install Git** (if not installed): [Git Downloads](https://git-scm.com/downloads).
3. **Make Changes**:
   - Modify the code 📝 to add more terms or change the styling 🎨.
4. **Push to GitHub**:
   - Run the following commands to push your changes:
     ```sh
     git add .
     git commit -m "Your commit message"
     git push origin main
     ```

## 🤝 Contributing
Contributions are welcome! If you'd like to contribute, please fork 🍴 the repository and use a feature branch 🌿. Pull requests are warmly welcomed.

## 📜 License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments
- Inspired by the need to make technical product specifications more understandable to general users.
- Thanks to all the contributors who helped improve this project.

## 📧 Contact
If you have any questions or suggestions, feel free to reach out:
- GitHub: [yourusername](https://github.com/yourusername)
- Email: 📧 youremail@example.com

