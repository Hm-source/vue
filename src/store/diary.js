export default {
  namespaced: true,
  state() {
    return {
      diaries: [],
    }
  },
  mutations: {
    addDiary(state, diary) {
      if (diary !== "") {
        let date = new Date()
        let obj = { title: diary.title, content: diary.item, date: date.getFullYear() + "." + (date.getMonth() + 1) + "." + date.getDate() }
        localStorage.setItem(diary, JSON.stringify(obj))
        state.diaries.push(obj)
        console.log(diary)
      } else {
        alert("내용 입력하세요.")
      }
    },
  },
  getters: {
    getDiaries(state) {
      return state.diaries
    },
  },
  actions: {},
}
