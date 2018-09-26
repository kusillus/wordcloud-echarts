const echarts =  require('echarts');
require('echarts-wordcloud');
const tagChart =  echarts.init(document.getElementById('tagChart'));
import data from './dummies.json';

function handleData() {
	data.data.map(function (x) {
		x.value = x.total;
		x.textStyle = createRandomColor();
	})
	drawWordCloud(data.data);
}

function createRandomColor() {
	return {
        normal: {
            color: 'rgb(0,'+Math.round(Math.random()*(162-120)+120)+','+Math.round(Math.random()*(255-160)+160)+')'
        }
    };
}

function drawWordCloud(data) {
	tagChart.setOption({
		title: {
			text: 'Imedia Word Cloud',
			link: 'http://www.imedia.pe'
		},
		tooltip: {
			show: true
		},
		series: [{
			name: 'Word Cloud',
			type: 'wordCloud',
			shape: 'circle',
			data: data
		}]
	});
}

handleData();