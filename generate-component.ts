const fs = require('fs-extra')
const path = require('path')
const readlineSync = require('readline-sync')

// 将连接符命名的字符串转换为大驼峰命名法
function toCamelCase(input: string): string {
  const camelCase = input.replace(/[-_](.)/g, (_, char) => char.toUpperCase())
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1)
}

async function copyRenameAndReplaceContent() {
  // 提示用户输入组件名称
  const componentName: string = readlineSync.question('请输入组件名称: ')

  // 定义源文件夹和目标文件夹的路径
  const sourceFolderPath: string = path.join(
    __dirname,
    'src',
    'components',
    'template',
    'base',
  )
  const targetFolderPath: string = path.join(
    __dirname,
    'src',
    'components',
    componentName,
  )

  try {
    // 拷贝文件夹到目标文件夹
    await fs.copy(sourceFolderPath, targetFolderPath)

    // 遍历目标文件夹中的文件
    const files: string[] = await fs.readdir(targetFolderPath)
    for (const file of files) {
      const filePath: string = path.join(targetFolderPath, file)

      // 获取文件扩展名
      const extname: string = filePath.slice(filePath.indexOf('.') + 1)

      // 构建新的文件名（大驼峰命名法，保留文件后缀）
      const baseFileName: string = path.basename(file, extname)
      const newFileName: string =
        toCamelCase(componentName) +
        '.' +
        baseFileName.slice(baseFileName.indexOf('.') + 1) +
        extname

      // 构建新的文件路径
      const newFilePath: string = path.join(targetFolderPath, newFileName)

      // 重命名文件
      await fs.rename(filePath, newFilePath)
      console.log(`文件 ${file} 已重命名为 ${newFileName}`)

      // 读取文件内容
      let fileContent: string = await fs.readFile(newFilePath, 'utf-8')

      // 替换文件内容中的 "BaseTemplate" 为用户输入的文件夹名称的大驼峰形式
      const regex = new RegExp('BaseTemplate', 'g')
      fileContent = fileContent.replace(regex, toCamelCase(componentName))

      // 写入替换后的文件内容
      await fs.writeFile(newFilePath, fileContent)
      console.log(`文件 ${file} 的内容已更新`)
    }

    console.log('所有文件夹、文件名及文件内容已成功更新')
  } catch (error) {
    console.error('操作文件时出错:', error)
  }
}

// 调用整合了拷贝、重命名和替换内容的函数
copyRenameAndReplaceContent()
