<template>
    <div class="pl-progress-circle">
        <canvas ref="canvas" :height="size" :width="size"></canvas>
        <div class="pl-progress-circle-label">
            <slot :animatePercent="animatePercent" :value="value" v-if="status === 'normal'">
                <span>{{animatePercent}}</span>%
            </slot>
            <pl-icon icon="pad-check" v-if="status === 'success'" :style="{color:successColor}"/>
            <pl-icon icon="pad-close" v-else-if="status === 'error'" :style="{color: errorColor}"/>
        </div>
    </div>
</template>


<script>
    import PlIcon from "../pl-icon";

    export default {
        name: "pl-progress-circle",
        components: {PlIcon},
        props: {
            value: {type: Number, default: 100},
            fontSize: {type: Number, default: 14},
            size: {type: Number, default: 100},
            lineSize: {type: Number, default: 6},
            startAngle: {type: Number, default: -0.5 * Math.PI},
            speed: {type: Number},
            outerColor: {},
            innerColor: {},
            status: {},
            successColor: {},
            errorColor: {},
        },
        data() {
            return {
                ctx: null,
                animatePercent: 0,
            }
        },
        watch: {
            value(val) {
                this.animatePercent = val
                this.draw(val)
            },
        },
        computed: {
            arcParam() {
                return [this.size / 2, this.size / 2, this.size / 2 - this.lineSize,]
            },
        },
        mounted() {
            this.ctx = this.$refs.canvas.getContext("2d")
            this.reload()
        },
        methods: {
            reload() {
                this.animatePercent = 0
                this.DreamLoading()
            },
            draw(animatePercent) {
                this.ctx.clearRect(0, 0, this.size, this.size)
                this.drawOuterCircle()
                this.drawInnerCircle(animatePercent)
            },
            //绘制最外层细圈
            drawOuterCircle() {
                this.ctx.save();                                                                        //save和restore可以保证样式属性只运用于该段canvas元素
                this.ctx.beginPath();                                                                   //开始路径
                this.ctx.strokeStyle = this.outerColor;                                                       //设置边线的颜色
                this.ctx.lineWidth = this.lineSize;
                this.ctx.arc(...this.arcParam, 0, Math.PI * 2, false);                                  //画一个圆的路径
                this.ctx.stroke();                                                                      //绘制边线
                this.ctx.closePath();
            },
            //绘制蓝色外圈
            drawInnerCircle(animatePercent) {
                this.ctx.save();
                this.ctx.strokeStyle = this.status === 'normal' ? this.innerColor : this.status === 'success' ? this.successColor : this.errorColor
                this.ctx.lineWidth = this.lineSize;
                this.ctx.lineCap = 'round';
                this.ctx.beginPath();
                this.ctx.arc(...this.arcParam, this.startAngle, this.startAngle + animatePercent / 100 * 2 * Math.PI, false);
                this.ctx.stroke();
                this.ctx.restore();
            },
            DreamLoading() {
                if (this.animatePercent <= this.value) {
                    this.animatePercent += this.speed;
                    this.draw(this.animatePercent)
                } else {
                    this.animatePercent = this.value
                    this.draw(this.animatePercent)
                    return
                }
                requestAnimationFrame(this.DreamLoading);
            },
        }
    }
</script>