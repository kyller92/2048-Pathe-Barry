<template>
    <div class="Plateau" >
        <!-- <canvas width="300" height="300" style="border:1px solid #BBB;" v-insert-message="exampleContent"></canvas> -->
        <div v-for="(horizon,index) in grille.squares" v-bind:key="index" :index="index">
            <span class="cases" display: inline v-for="(vertic,index) in horizon" v-bind:key="index" :index="index">
                {{vertic}}
            </span>
        </div>
    </div>
</template>

<script>
import Board from '@/scripts/Board.js' 
import design from '@/scripts/design.css'

export default {
  name: 'Ecran',
  created(){
    Board.init(4)
    this.grille = Board
    console.log(Board)
    console.log(this.grille)
  },
  data () {
    return {
      grille:''
    }
  }
}
</script>