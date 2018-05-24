<template>
    <div class="Plateau" v-bind:style="{'text-align':'  center'}" >
        <!-- <canvas width="300" height="300" style="border:1px solid #BBB;" v-insert-message="exampleContent"></canvas> -->
        <div class="gamearea">
            <div v-for="(horizon,index) in grille.squares" v-bind:key="index" :index="index">
                <span class="cases" display: inline v-for="(vertic,index) in horizon" v-bind:key="index" :index="index">
                    
                    {{vertic}}
                    
                </span>
            </div>
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
    },
    methods: {
        
    },
    mounted() {
        window.addEventListener("keydown", function(e) {
            switch(e.keyCode){
                case 38:
                    Board.move ('up')
                    break;
                case 37:
                    Board.move ('left')
                    break;
            //     case 39:
            //         Board.move ('right')
            //         break;
            //     case 40:
            //         Board.move ('down')
            //         break;
            }
            console.log(Board.squares)
        });
        
  }

}
</script>