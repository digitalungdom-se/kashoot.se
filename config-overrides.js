const { override, fixBabelImports, addLessLoader } = require('customize-cra');
const theme = {
  colors: {
    red: "#d92f10",
    lightRed: "#f7b7b2",
		error:"#7d0505",
    white: "#f5e9e9",
    black: "#1a1818",
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
			"@text-color": theme.colors.black,
			"@heading-color": theme.colors.white,

      "@font-family": "Roboto",

      "@body-background": theme.colors.red,
      "@component-background": theme.colors.white,

			"@link-color": theme.colors.white,
			"@link-hover-color": theme.colors.lightRed,

			"@btn-default-color": theme.colors.red,
      "@border-color-base": theme.colors.red,

			"@input-color": theme.colors.red,
		 },
	 }),
)
