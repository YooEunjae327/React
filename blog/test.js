let user = {
  name: 'John',
  surname: 'Smith',

  get fullName() {
    return `${this.name} ${this.surname}`
  },

  set fullName(value) {
    ;[this.name, this.surname] = value.split(' ')
  },
}

console.log(user.fullName)
user.fullName = 'Alice Cooper'
console.log(user.fullName)


https://open.neis.go.kr/hub/mealServiceDietInfo?Type=json&ATPT_OFCDC_SC_CODE=D10&SD_SCHUL_CODE=7240454&MLSV_YMD=20220504