import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    surveys :[]
  },
  getters: {
    getSurveyById: (state) => (id) => {
      return state.surveys.find(s => s&&s.id === id)
    }
  },
  mutations: {
    setSurveyValue(state,val) {
      var curr = state.surveys.find(s=> s&&s.id===val.surveyId)
      if(curr){
        curr.op.push(val.selected)
      }
      else{
        var surveryItem = {
          id: val.surveyId,
          op:  [val.selected]
        }
      }
      state.surveys.push(surveryItem)
    }
  },
  actions: {
    submitSurvey({ commit }, val) {
      commit('setSurveyValue', val);
    },
  },
  modules: {
  }
})
