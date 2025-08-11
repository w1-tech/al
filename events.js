// 定义一个独立的命名空间（也可直接用函数）
const ConsoleBillboard = {
  // 保留原有的输出逻辑
  billboard: function() {
    if (!('console' in window)) {
      return;
    }
    console.log(`
----------------------------------
|                                |           
|     █████╗        ██╗          |
|    ██╔══██╗       ██║          |
|    ███████║       ██║          |
|    ██╔══██║       ██║          |
|    ██║  ██║       ███████╗     |
|    ╚═╝  ╚═╝       ╚══════╝     |
|   Powered by ailisi6           |
|   email ailisi6@outlook.com    |
----------------------------------  
    `);
  }
};

// 页面加载时执行（保持原有的自动输出功能）
ConsoleBillboard.billboard();


