<template>
  <div class="player" :class="{[`${color}`]: true}">
    <div class="record" :class="{[`${color}`]: true}">
      <div class="label"></div>
    </div>
    <div class="tone-arm" :class="{[`${color}`]: true}">
      <div class="control"></div>
    </div>
    <button class="btn" @click="playSong" :class="{[`${color}`]: true}"></button>
    <div class="slider-container">
      <input
          type="range"
          class="slider"
          min="0"
          max="1"
          step="0.1"
          value="0.7"
          :class="{[`${color}`]: true}"
          v-on:input="changeVolume"
      />
    </div>
    <audio loop class="my-song" src="https://od.lk/s/MjlfMjM4MjYxNDBf/ddudu.mp3" preload="auto" :class="{[`${color}`]: true}"></audio>
  </div>
</template>

<script>
export default {
  name: 'MinjiRecordPlayer',
  props: {
    color: {
      type: String,
      default: 'red',
      validator(val) {
        return ['red', 'purple', 'blue', 'green'].indexOf(val.toLowerCase()) >= 0;
      }
    }
  },
  data() {
    return {
      state: false
    }
  },
  methods: {
    playSong() {
      let record = document.querySelector(`.record.${this.color}`);
      let toneArm = document.querySelector(`.tone-arm.${this.color}`);
      let song = document.querySelector(`.my-song.${this.color}`);

      if (this.state === false) {
        record.classList.add("on");
        toneArm.classList.add("play");
        setTimeout(() => {
          song.play();
        }, 500);
      }else {
        record.classList.remove("on");
        toneArm.classList.remove("play");
        song.pause();
      }
      this.state = !this.state;
    },
    changeVolume(e) {
      let song = document.querySelector(`.my-song.${this.color}`);
      song.volume = Number(e.target.value);
    }
  }
}
</script>


<style scoped lang="scss">
$purple-primary: #9b59b6;
$purple-secondary: #8c49a7;
$purple-tertiary: #b66fd3;
$green-primary: #53a96c;
$green-secondary: #48935d;
$green-tertiary: #72c088;
$blue-primary: #3498db;
$blue-secondary: #2489cc;
$blue-tertiary: #63b0e3;
@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
.player {
  margin: 20px 0;
  background-color: #d52f31;
  width: 330px;
  height: 190px;
  position: relative;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  border-radius: 8px;
  box-shadow: 0 8px 0 0 #be272a;
  &.purple {
    background-color: $purple-primary;
    box-shadow: 0 8px 0 0 $purple-secondary;
  }
  &.green {
    background-color: $green-primary;
    box-shadow: 0 8px 0 0 $green-secondary;
  }
  &.blue {
    background-color: $blue-primary;
    box-shadow: 0 8px 0 0 $blue-secondary;
  }

  > .record {
    height: 175px;
    width: 175px;
    background-color: #181312;
    border-radius: 50%;
    position: absolute;
    top: 10px;
    left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:before, &:after {
      position: absolute;
      content: "";
      border: 5px solid transparent;
      border-top-color: #2c2424;
      border-bottom-color: #2c2424;
      border-radius: 50%;
    }

    &:before {
      height: 135px;
      width: 135px;
    }

    &:after {
      height: 95px;
      width: 95px;
    }

    > .label {
      background-color: #181312;
      height: 15px;
      width: 15px;
      border: 20px solid #ff8e00;
      border-radius: 50%;
    }
  }

  > .tone-arm {
    height: 90px;
    width: 6px;
    background-color: #ffffff;
    position: absolute;
    top: 25px;
    right: 95px;
    transition: 1s;
    transform-origin: top;

    &:before {
      content: "";
      height: 40px;
      width: 6px;
      background-color: #ffffff;
      position: absolute;
      transform: rotate(30deg);
      bottom: -36px;
      right: 10px;
    }

    &:after{
      content: "";
      position: absolute;
      height: 0;
      width: 10px;
      border-top: 18px solid #b2aea6;
      border-left: 2px solid transparent;
      border-right: 2px solid transparent;
      top: 108px;
      right: 12.5px;
      transform: rotate(30deg);
    }

    > .control {
      background-color: #181312;
      height: 37px;
      width: 37px;
      border: 10px solid #2c2c2c;
      border-radius: 50%;
      position: absolute;
      top: -16px;
      left: -16px;
    }
  }

}

.btn {
  height: 28px;
  width: 28px;
  background-color: #ed5650;
  border-radius: 50%;
  position: absolute;
  bottom: 20px;
  right: 30px;
  border: 3.5px solid #be272a;
  outline: none;
  cursor: pointer;
  &.purple{
    border: 3.5px solid $purple-secondary;
    background-color: $purple-tertiary;
  }
  &.green{
    border: 3.5px solid $green-secondary;
    background-color: $green-tertiary;
  }
  &.blue{
    border: 3.5px solid $blue-secondary;
    background-color: $blue-tertiary;
  }
}



.slider {
  -webkit-appearance: none;
  appearance: none;
  transform: rotate(-90deg);
  width: 102px;
  height: 19px;
  position: absolute;
  left: 233px;
  top: 60px;
  background-color: #be272a;
  outline: none;
  border-radius: 3px;
  border: 6px solid #ed5650;
  z-index: 10;

  &.purple {
    border: 6px solid $purple-tertiary;
    background-color: $purple-secondary;
  }
  &.green {
    border: 6px solid $green-tertiary;
    background-color: $green-secondary;
  }
  &.blue {
    border: 6px solid $blue-tertiary;
    background-color: $blue-secondary;
  }
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 10px;
  height: 12px;
  background-color: #ffffff;
  cursor: pointer;
}

.play {
  transform: rotate(30deg);
  transform-origin: top;
  transition: 1s;
}

.on {
  animation: spin 3s 1s linear infinite;
}
</style>