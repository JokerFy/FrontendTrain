<template>
  <section class="m-istyle">
    <dl>
      <dt>有格调</dt>
      <dd
        v-for="(item,idx) in list"
        :key="idx"
        :class="{active:kind===item.kind}"
        :kind="item.kind"
        @mouseover="over">
        {{ item.title }}
      </dd>
    </dl>

    <ul class="ibody">
      <li
        v-for="item in cur"
        :key="item.title">
        <el-card
          :body-style="{ padding: '0px' }"
          shadow="never">
          <img
            :src="item.img"
            class="image">
          <ul class="cbody">
            <li class="title">{{ item.title }}</li>
            <li class="pos"><span>{{ item.pos }}</span></li>
            <li class="price">￥<em>{{ item.price }}</em><span>/起</span></li>
          </ul>
        </el-card>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  directives: {
    kind: {
      inserted: function(el) {
        return ''
      }
    }
  },
  data() {
    return {
      kind: 'all',
      list: [
        {
          title: '全部',
          kind: 'all',
          child: [
            {
              title: '奈瑞儿美颜塑身SPA(大中华店)',
              img:
                'http://p0.meituan.net/merchantpic/b02b296fb78ab3cc6a7deb46ffe9dbf8390220.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c',
              pos: '奈瑞儿美颜塑身SPA(大中华店)',
              price: 99
            },
            {
              title: 'DQ(连城新天地)',
              img:
                'http://p0.meituan.net/msmerchant/05373fa192c12e87d058801c7786b902524474.jpg@368w_208h_1e_1c',
              pos: '情迷奥利奥蛋糕冰淇淋1个,约1200克,圆形',
              price: 218
            },
            {
              title: '奈瑞儿美颜塑身SPA(大中华店)2',
              img:
                'http://p0.meituan.net/merchantpic/b02b296fb78ab3cc6a7deb46ffe9dbf8390220.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c',
              pos: '奈瑞儿美颜塑身SPA(大中华店)',
              price: 99
            },
            {
              title: 'DQ(连城新天地)2',
              img:
                'http://p0.meituan.net/msmerchant/05373fa192c12e87d058801c7786b902524474.jpg@368w_208h_1e_1c',
              pos: '情迷奥利奥蛋糕冰淇淋1个,约1200克,圆形',
              price: 218
            },
            {
              title: '奈瑞儿美颜塑身SPA(大中华店)3',
              img:
                'http://p0.meituan.net/merchantpic/b02b296fb78ab3cc6a7deb46ffe9dbf8390220.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c',
              pos: '奈瑞儿美颜塑身SPA(大中华店)',
              price: 99
            },
            {
              title: 'DQ(连城新天地)3',
              img:
                'http://p0.meituan.net/msmerchant/05373fa192c12e87d058801c7786b902524474.jpg@368w_208h_1e_1c',
              pos: '情迷奥利奥蛋糕冰淇淋1个,约1200克,圆形',
              price: 218
            }
          ]
        },
        {
          title: '约会聚餐',
          kind: 'part',
          child: [
            {
              title: '奈瑞儿美颜塑身SPA(大中华店)2',
              img:
                'http://p0.meituan.net/merchantpic/b02b296fb78ab3cc6a7deb46ffe9dbf8390220.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c',
              pos: '奈瑞儿美颜塑身SPA(大中华店)',
              price: 99
            },
            {
              title: 'DQ(连城新天地)2',
              img:
                'http://p0.meituan.net/msmerchant/05373fa192c12e87d058801c7786b902524474.jpg@368w_208h_1e_1c',
              pos: '情迷奥利奥蛋糕冰淇淋1个,约1200克,圆形',
              price: 218
            }
          ]
        },
        {
          title: '丽人SPA',
          kind: 'spa',
          child: [
            {
              title: '奈瑞儿美颜塑身SPA(大中华店)3',
              img:
                'http://p0.meituan.net/merchantpic/b02b296fb78ab3cc6a7deb46ffe9dbf8390220.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c',
              pos: '奈瑞儿美颜塑身SPA(大中华店)',
              price: 99
            },
            {
              title: 'DQ(连城新天地)3',
              img:
                'http://p0.meituan.net/msmerchant/05373fa192c12e87d058801c7786b902524474.jpg@368w_208h_1e_1c',
              pos: '情迷奥利奥蛋糕冰淇淋1个,约1200克,圆形',
              price: 218
            }
          ]
        },
        {
          title: '电影演出',
          kind: 'movie',
          child: [
            {
              title: '奈瑞儿美颜塑身SPA(大中华店)4',
              img:
                'http://p0.meituan.net/merchantpic/b02b296fb78ab3cc6a7deb46ffe9dbf8390220.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c',
              pos: '奈瑞儿美颜塑身SPA(大中华店)',
              price: 99
            },
            {
              title: 'DQ(连城新天地)4',
              img:
                'http://p0.meituan.net/msmerchant/05373fa192c12e87d058801c7786b902524474.jpg@368w_208h_1e_1c',
              pos: '情迷奥利奥蛋糕冰淇淋1个,约1200克,圆形',
              price: 218
            }
          ]
        },
        {
          title: '品质出游',
          kind: 'travel',
          child: [
            {
              title: '奈瑞儿美颜塑身SPA(大中华店)5',
              img:
                'http://p0.meituan.net/merchantpic/b02b296fb78ab3cc6a7deb46ffe9dbf8390220.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c',
              pos: '奈瑞儿美颜塑身SPA(大中华店)',
              price: 99
            },
            {
              title: 'DQ(连城新天地)5',
              img:
                'http://p0.meituan.net/msmerchant/05373fa192c12e87d058801c7786b902524474.jpg@368w_208h_1e_1c',
              pos: '情迷奥利奥蛋糕冰淇淋1个,约1200克,圆形',
              price: 218
            }
          ]
        }
      ],
      cur: ''
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].kind == this.kind) {
          this.cur = this.list[i].child
        }
      }
    })
  },
  methods: {
    over: function(e) {
      let dom = e.target
      this.kind = dom.getAttribute('kind')
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].kind == this.kind) {
          this.cur = this.list[i].child
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/index/artistic.scss';
</style>
