
# Boilerplate Considerations
- https://github.com/electron-react-boilerplate/electron-react-boilerplate
- https://github.com/szwacz/electron-boilerplate
- https://electronforge.io/

# Helpers
- https://www.npmjs.com/package/xtend
- Puppeteer Emulate Media: https://pptr.dev/#?product=Puppeteer&version=v1.12.2&show=api-pageemulatemediamediatype


# Articles
- https://getstream.io/blog/takeaways-on-building-a-react-based-app-with-electron/


# Electron Screenshot Example packages
- **Best** https://github.com/mixu/electroshot
- https://github.com/FWeinb/electron-screenshot-app
- https://github.com/juliangruber/capture-electron


# Save App data
- https://github.com/electron/electron/blob/master/docs/api/app.md#appgetpathname


# Page list
- Add
- Remove
- Reorder


# Screenshot options
- ADD default device sizes


# Save as PDF
- Puppeteer has more options and will emulateMedia to `screen` overriding the print css media
  - https://pptr.dev/#?product=Puppeteer&version=v1.13.0&show=api-pagepdfoptions
  - `page.emulateMedia('screen')`
- printToPDF: https://electronjs.org/docs/api/web-contents#contentsprinttopdfoptions-callback
- https://www.npmjs.com/package/electron-pdf
- https://stackoverflow.com/questions/32716556/remove-css-media-print-rules-without-modifying-css-files
```
for(var i=document.styleSheets[0].rules.length -1; i >0; i--){
   if(document.styleSheets[0].rules[i].cssText.indexOf("@media print") !=-1 )
   {
      document.styleSheets[0].deleteRule(i);
   }
}
```


# Capture page not working
- https://ourcodeworld.com/articles/read/280/creating-screenshots-of-your-app-or-the-screen-in-electron-framework
- https://github.com/electron/electron/issues/7387


# Feature set
- Scan sitemap to compile list
- Add clipping UI
- Delete elements
- Add css, js, html
- Add page meta
- Add image alt text
- Page login: https://electronjs.org/docs/api/client-request#event-login
  request.on('login', (authInfo, callback) => {
    callback('username', 'password')
  })
- Add page margins
- Add annotations
- Create log: https://www.npmjs.com/package/minilog or https://www.npmjs.com/package/electron-log


# OLD research
- https://medium.com/@dschnr/using-headless-chrome-as-an-automated-screenshot-tool-4b07dffba79a
- Puppeteer docs: https://pptr.dev/#?product=Puppeteer&version=v1.12.2&show=api-pagescreenshotoptions
