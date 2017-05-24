<template>
  <div class="all-count">
    <Row :gutter="20">
      <Col span="8">
      <div class="panel">
        <div class="panel-title no-border">
          <h3>Browser version count</h3>
        </div>
        <div class="panel-body">
          <highcharts :options="browserVerOpt"></highcharts>
        </div>
      </div>
      </Col>
      <Col span="16">
      <div class="panel">
        <div class="panel-title no-border">
          <h3>Weekly report</h3>
        </div>
        <div class="panel-body">
          <highcharts :options="weekOpt"></highcharts>
        </div>
      </div>
      </Col>
    </Row>
  </div>
</template>

<script>
  export default{
    data(){
      return {
//        weekCount:
      }
    },
    computed: {
      browserData(){
        if (this.$store.getters.errorsCount) {
          return this.$store.getters.errorsCount.browserVersion;
        } else {
          return []
        }
      },
      weekData(){
        const weeks = this.$store.getters.errorsCount.weeks;
        let weekData = {
          xData: [],
          seriesData: []
        };
        for (let k in weeks) {
          weekData.xData.push(k);
          weekData.seriesData.push(weeks[k].errTime)
        }
        return weekData;
      },
      weekOpt(){
        return {
          credits: {
            enabled: false
          },
          chart: {
            height: 250
          },
          title: {
            text: ''
          },
          xAxis: {
            categories: this.weekData.xData
          },
          yAxis: {
            title: {
              text: ''
            },
            plotLines: [{
              value: 0,
              width: 1,
              color: '#808080'
            }]
          },
          legend: {
            enabled: false
          },
          series: [{
            name: 'Times',
            data: this.weekData.seriesData
          }]
        }
      },
      errorsCount(){
        return this.$store.getters.errorsCount;
      },
      browserVerOpt(){
        return {
          credits: {
            enabled: false
          },
          chart: {
            height: 250,
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
          },
          title: {
            text: ''
          },
          tooltip: {
            headerFormat: '{series.name}<br>',
            pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
          },
          plotOptions: {
            pie: {
              dataLabels: {
                enabled: true,
                distance: -20,
                style: {
                  color: 'white',
                  textShadow: '0px 1px 2px black'
                }
              },
              startAngle: -90,
              endAngle: 90,
              center: ['50%', '75%']
            }
          },
          series: [{
            type: 'pie',
            name: 'Browser share',
            innerSize: '50%',
            data: this.browserData
          }]
        }
      }
    },
    methods: {}
  }
</script>

<style scoped lang="scss" type="text/scss">

</style>
