// 检测浏览器是否支持placeholder属性
function placeholderSupport() {
	return 'placeholder' in document.createElement('input');
}