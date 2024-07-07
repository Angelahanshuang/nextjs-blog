// tailwind.config.js
// 使用 purge 选项来删除未使用的 CSS
module.exports = {
    purge: [
      // Use *.tsx if using TypeScript
      './pages/**/*.js',
      './components/**/*.js'
    ]
    // ...
  }