<template>
  <div class="demo-split">
    <Split v-model="split1">
      <div slot="left" class="demo-split-pane">
        <Tabs value="name1">
          <TabPane label="点餐" name="name1">
            <Table border :columns="columns12" :data="data6" show-summary>
              <template slot-scope="{ row }" slot="name">
                <strong>{{ row.name }}</strong>
              </template>
              <template slot-scope="{ row, index }" slot="action">
                <Button
                  type="primary"
                  size="small"
                  style="margin-right: 5px"
                  @click="addOrderList(row)"
                >增加</Button>
                <Button type="error" size="small" @click="remove(index)">删除</Button>
              </template>
            </Table>
            <br />
            <Button type="success" @click="over">结账</Button>
            <Button type="error" @click="delAll">移除</Button>
          </TabPane>
        </Tabs>
      </div>
      <div slot="right" class="demo-split-pane">
        <Tabs value="name1">
          <TabPane label="标签一" name="name1">
            <ul class="cookList">
              <li v-for="(goods,index) in oftenGoods[0]" :key="index" @click="addOrderList(goods)">
                <span class="foodName">{{goods.goodsName}}</span>
                <span class="foodPrice">￥{{goods.price}}元</span>
              </li>
            </ul>
          </TabPane>
          <TabPane label="标签二" name="name2">
            <ul class="cookList">
              <li v-for="(goods,index) in oftenGoods[1]" :key="index" @click="addOrderList(goods)">
                <span class="foodName">{{goods.goodsName}}</span>
                <span class="foodPrice">￥{{goods.price}}元</span>
              </li>
            </ul>
          </TabPane>
          <TabPane label="标签三" name="name3">
            <ul class="cookList">
              <li v-for="(goods,index) in oftenGoods[2]" :key="index" @click="addOrderList(goods)">
                <span class="foodName">{{goods.goodsName}}</span>
                <span class="foodPrice">￥{{goods.price}}元</span>
              </li>
            </ul>
          </TabPane>
          <TabPane label="标签三" name="name4">
            <ul class="cookList">
              <li v-for="(goods,index) in oftenGoods[3]" :key="index" @click="addOrderList(goods)">
                <span class="foodName">{{goods.goodsName}}</span>
                <span class="foodPrice">￥{{goods.price}}元</span>
              </li>
            </ul>
          </TabPane>
        </Tabs>
      </div>
    </Split>
  </div>
</template>

<script>
import { Message } from "view-design";
export default {
  data() {
    return {
      oftenGoods: [],
      split1: 0.5,
      columns12: [
        {
          title: "Name",
          slot: "name",
        },
        {
          title: "Count",
          key: "count",
        },
        {
          title: "Price",
          key: "price",
        },
        {
          title: "Action",
          slot: "action",
          width: 150,
          align: "center",
        },
      ],
      data6: [],
    };
  },
  created() {
    this.init();
  },
  methods: {
    addOrderList(index) {
      let isHave = false;
      for (let i = 0; i < this.data6.length; i++) {
        if (this.data6[i].goodsId == index.goodsId) {
          isHave = true; //存在
        }
      }
      if (isHave) {
        let arr = this.data6.filter((o) => o.goodsId == index.goodsId);
        arr[0].count++;
        arr[0].price += arr[0].price;
      } else {
        let newData = {
          goodsId: index.goodsId,
          name: index.goodsName,
          count: 1,
          price: index.price,
        };
        console.log(newData);
        this.data6.push(newData);
      }
    },
    over() {
      this.data6.length > 0
        ? (this.data6.splice(0) && Message.info("结账成功"))
        : Message.info("请先点餐");
    },
    delAll() {
      this.data6.length > 0
        ? (this.data6.splice(0) && Message.info("删除成功"))
        : Message.info("请先点餐");
    },
    remove(index) {
      this.data6.splice(index, 1);
    },
    init() {
      //读取分类商品列表
      this.$http
        .get(
          "https://www.fastmock.site/mock/0bf6a5bae7eab8507e44b56191ddff36/vuepos/typeGoods"
        )
        .then((response) => {
          this.oftenGoods = response.data.data;
        })
        .catch((error) => {
          Message.info("网络错误，不能访问");
        });
    },
  },
};
</script>

<style>
.demo-split {
  height: 100%;
  border: 1px solid #dcdee2;
  width: 95%;
  margin-left: 5%;
}
.demo-split-pane {
  padding: 10px;
}
.cookList li {
  list-style: none;
  width: 23%;
  border: 1px solid #e5e9f2;
  height: auot;
  overflow: hidden;
  background-color: #fff;
  padding: 2px;
  float: left;
  margin: 2px;
  cursor: pointer;
}
.cookList li span {
  display: block;
  float: left;
}
.foodName {
  font-size: 18px;
  padding-left: 10px;
  color: brown;
}
.foodPrice {
  font-size: 16px;
  padding-left: 10px;
  padding-top: 10px;
}
</style>