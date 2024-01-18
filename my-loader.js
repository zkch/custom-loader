module.exports = function (content) {
  const templateMatch = content.match(/<template>([\s\S]*?)<\/template>/);
  let restContent = content
  if (templateMatch) {
    const templateContent = templateMatch[1];
    restContent = content.replace(/<template>[\s\S]*?<\/template>/, '');
    
    let returnContent = templateContent.replace(/<\/el-/g, '\n</el-')
    returnContent = returnContent.replace(/<el-/g, '\n<el-')
    returnContent = returnContent.replace(/<input/g, '\n<input')

    var regInput = /<(input)([^<>]*)>/g // tmp
    let contentArr = returnContent.split('\n')
    let resultArr = contentArr.map((item, index) => {
      if (regInput.test(item)) {
        item = item.replace(/<input/g, '<input name="input_name"')
      }
      return item
    })
    const result = resultArr.join('\n')
    console.log('result', result)
    // return result
    return `module.exports = ${JSON.stringify(result + restContent)};`
    // this.callback(null, result)
    // return
  } else {
    // return content;
    return `module.exports = ${JSON.stringify(content)};`
    // this.callback(null, content)
    // return
  }
}
