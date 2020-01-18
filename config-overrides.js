const { override, fixBabelImports, addLessLoader } = require('customize-cra');
const theme = {
  colors: {
    red: "#d92f10",
    lightRed: "#f7b7b2",
		error:"#7d0505",
    white: "#f5e9e9",
    black: "#1a1818",
    grey: "#8c8c8c",
    lightGrey: "#c4c4c4",
  },
}

module.exports = override(
	fixBabelImports('import', {
	  libraryName: 'antd',
	  libraryDirectory: 'es',
	  style: true,
	}),
	 addLessLoader({
		 javascriptEnabled: true,
		 modifyVars: {
			"@primary-color": theme.colors.red,
			"@error-color": theme.colors.error,
			"@text-color": theme.colors.grey,
			"@heading-color": theme.colors.black,

      "@font-family": "Roboto",

      "@body-background": theme.colors.red,
      "@component-background": theme.colors.white,

      "@border-color-base": theme.colors.lightGrey,
      "@border-color-split": theme.colors.lightGrey,
      "@table-header-color": "black",
      "@table-header-bg": "rgba(0,0,0,0)",
      "@table-expanded-row-bg": "rgba(0,0,0,0)",

      "@badge-dot-size": 10,

			"@link-color": theme.colors.white,
			"@link-hover-color": theme.colors.lightRed,

			"@btn-default-color": theme.colors.red,
      "@border-color-base": theme.colors.lightRed,

			"@input-color": theme.colors.red,
		 },
	 }),
)
