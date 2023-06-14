module.exports = switchview

async function switchview(params) {
  const noticeDuration = 2e3
  const activePane = this.app.workspace.activeLeaf
  const currentView = activePane.getViewState()
  if (currentView.type === "empty") {
    new Notice("There is currently no file open.")
    return
  }
  let currentMode
  if (currentView.state.mode === "preview") currentMode = "preview"
  if (currentView.state.mode === "source" && currentView.state.source)
    currentMode = "source"
  if (currentView.state.mode === "source" && !currentView.state.source)
    currentMode = "live"
  const newMode = currentView
  switch (currentMode) {
    case "preview":
      newMode.state.mode = "source"
      newMode.state.source = true
      new Notice("切换为: 编辑视图", noticeDuration)
      break
    case "source":
      newMode.state.mode = "source"
      newMode.state.source = false
      new Notice("切换为: 实时预览", noticeDuration)
      break
    case "live":
      newMode.state.mode = "preview"
      new Notice("切换为: 阅读视图", noticeDuration)
      break
  }
  activePane.setViewState(newMode)
}
