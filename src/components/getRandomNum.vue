<script setup>
// M6:6+1 in 1~49 no repeat
// PK10:10 in 1~10 no repeat
// SSC: 5 in 0~9
// F3: 3 in 1~6

const getRandomNum = (type) => {
  const numSet = new Set()
  const num = (limit) => {
    return Math.floor(Math.random() * limit)
  }
  const randomNumSet = {
    F3: () => {
      while (numSet.size < 3) {
        const setNum = num(6) + 1
        numSet.add(setNum)
      }
      return numSet
    },
    SSC: () => {
      while (numSet.size < 5) {
        const setNum = num(10)
        numSet.add(setNum)
      }
      return numSet
    },
    M6: () => {
      while (numSet.size < 7) {
        const setNum = num(49) + 1
        numSet.add(setNum)
      }
      return numSet
    },
    PK10: () => {
      while (numSet.size < 10) {
        const setNum = num(10) + 1
        numSet.add(setNum)
      }
      return numSet
    },
  }

  return randomNumSet[type]()
}
</script>

<template>
  <!-- <div v-for="(num, i) in getRandomNum('SSC')" :key="i">{{ num }}</div> -->
  <div>{{ getRandomNum("M6") }}</div>
</template>

<style></style>
