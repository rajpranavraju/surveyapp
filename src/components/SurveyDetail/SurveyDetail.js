import Surveys from '../../assets/survey.json'
export default {
    name: 'SurveyDetail',
    components: {
    },
    data() {
        return{
            surveyDet: [],
            allOptions: []
        }
    },
    mounted() {
        this.surveyDet = Surveys.find(s=> s.id === this.$route.params.id)
        this.percentageCalculator()
    },
    methods: {
      goListing() {
        this.$router.push('/')
      },
      percentageCalculator() {
        var surveyStatus = this.$store.getters.getSurveyById(this.$route.params.id)
        if(surveyStatus){
        var uniqItems = [...new Set(surveyStatus.op)];
        var totalHits = surveyStatus.op.length
        this.allOptions = []
        uniqItems.forEach((item)=> {
            var c = surveyStatus.op.filter(s=> s===item).length
            var item = {
                title: item,
                count: c,
                percentage: c/totalHits*100
            }
            this.allOptions.push(item)
        })
        }
      },
      submitHandler() {
        var checkedItem = document.querySelector('input[name="radioButton"]:checked')
        if(!checkedItem){
            alert('please select any option')
            return
        }
        var sel = checkedItem.value;
        document.querySelector('input[name="radioButton"]:checked').checked = false;
        this.$store.dispatch('submitSurvey',{'surveyId':this.$route.params.id,'selected':sel})
        this.percentageCalculator()
      }
    }
  }