import React from 'react'

const ContextObject = React.createContext({
  isDarkTheme: '',
  changeTheme: () => {},
  activeMenu: '',
  changeActiveMenu: () => {},
  save: '',
  savedVideosList: [],
  addVideosToSavedVideos: () => {},
  deleteVideosFromSavedVideos: () => {},
  updateSave: () => {},
})

export default ContextObject
