import Surveys from '../../assets/survey.json'
export default {
    name: 'SurveyList',
    components: {
    },
    data() {
        return{
            surveyList: null
        }
    },
    mounted() {
        this.surveyList = Surveys
    },
    methods: {
        selectSurvey(id) {
            this.$router.push(`/surveydetail/${id}`)
        }
    }
  }