# Acode Plugin Essential

## Acode Plugin Development - API Cheat Sheet

A complete guide to known usable Acode internal modules, methods, utilities, and components for plugin development.

| Module          | Usage Example                                                       | Description                                             | Why Use                                             |
| --------------- | ------------------------------------------------------------------- | ------------------------------------------------------- | --------------------------------------------------- |
| `settings`      | `settings.value.autosave`<br>`settings.update('key', val)`          | Access and update user settings                         | Modify or read user preferences                     |
| `editorManager` | `editorManager.editor.insert('text')`<br>`editorManager.activeFile` | Manage open tabs, files, and the active editor instance | Control editor content and file interactions        |
| `fsOperation`   | `fsOperation('/path').readFile()`                                   | Read, write, list, and delete files or folders          | File system interaction                             |
| `appSettings`   | `appSettings.value.appTheme`                                        | App-wide configuration like themes and autosave         | Change app-level configurations                     |
| `Url`           | `Url.parse(url)`<br>`Url.basename(path)`                            | Work with file paths, extract file names and extensions | Helpful for file handling                           |
| `helpers`       | `helpers.showToast('Hello')`<br>`helpers.confirm(...)`              | Dialogs, alerts, and UI helpers                         | User interaction and feedback                       |
| `themes`        | `themes.add(name, obj)`<br>`themes.set(name)`                       | Manage and apply custom themes                          | Plugin-specific or custom styling                   |
| `clipboard`     | `clipboard.write('text')`<br>`clipboard.paste()`                    | Read and write clipboard content                        | Copy-paste functionality                            |
| `constants`     | `constants.FILE_TYPE`                                               | Common constants like file types, default settings      | Quick access to known constant values               |
| `plugin`        | `plugin.list`<br>`plugin.disable(id)`                               | Manage plugins inside Acode                             | Enable, disable, or inspect plugins                 |
| `FileBrowser`   | `FileBrowser('Pick', { canSelectFiles: true })`                     | Native file picker UI component                         | Let user choose a file or folder                    |
| `window`        | `window.add(...)`                                                   | Create and manage custom windows/modals                 | Build custom plugin UI                              |
| `Layout`        | `Layout.hide('sidebar')`                                            | Control layout elements like sidebar, header, footer    | Adjust app layout to fit plugin needs               |
| `dialogs`       | `dialogs.select(...)`<br>`dialogs.prompt(...)`                      | Native styled dialogs and prompts                       | Enhanced user input UX                              |
| `externalFs`    | `externalFs.readFile(url)`                                          | Access external (non-sandbox) storage                   | Advanced storage access                             |
| `actionStack`   | `actionStack.push({ id, action })`                                  | Handle back button and navigation                       | Support modal or custom screen flows                |
| `app`           | `app.exit()`<br>`app.getVersion()`                                  | Control app behavior and metadata                       | App-level functionality (exit, version check, etc.) |
| `tabGroup`      | `tabGroup.addTab(...)`                                              | Tab UI component for plugins                            | Build multi-tabbed plugin interfaces                |
| `Input`         | `Input('Title', 'Placeholder', cb)`                                 | Quick input prompt                                      | Simple user input                                   |

---

> **Note:** These modules are unofficial and may change depending on Acode updates. Use `Object.keys(acode.require('module'))` to inspect methods.

---

### Official Resources:

-   [Acode Plugin GitHub](https://github.com/deadlyjack/acode-plugins)
-   [Plugin Template](https://github.com/deadlyjack/acode-plugin-template)

-   Community Discord / Telegram

Feel free to copy and extend this markdown for your plugin's README or dev notes!
