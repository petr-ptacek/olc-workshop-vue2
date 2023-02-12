<template>
  <div class="notify">
    <ul class="notify__list">
      <li v-for="item in state.items"
          class="notify__listItem"
          :key="item.id"
      >
        <NotifyItem
            :item="item"
            @close="deleteNotifyItem($event)"
        >
          <!--          <template #default="{ message }">-->
          <!--            <p style="font-style: italic;">{{ message }}</p>-->
          <!--          </template>-->
        </NotifyItem>
      </li>
    </ul>
  </div>
</template>

<script>
import NotifyItem from "@/components/Notify/NotifyItem.vue";

/**
 * @param {import("@/types").NotifyPayload} data
 * @returns {import("@/types").NotifyItem}
 */
function createNotifyItem(data) {
  return {
    id: window.crypto.randomUUID(),
    type: data.type,
    message: data.message
  }
}

export default {
  name: "TheNotify",
  components: { NotifyItem },
  data() {
    return {
      state: {
        /** @type {import("@/types").NotifyItem[]} */
        items: []
      }
    }
  },
  methods: {
    /**
     this.items.push(data)
     * @param {import("@/types").NotifyPayload} data
     */
    notify(data) {
      const item = createNotifyItem(data);

      // window.setTimeout(
      //     () => {
      //       this.deleteNotifyItem(item)
      //     },
      //     6000
      // );

      this.state.items.unshift(item);
    },
    /**
     * @param {import("@/types").NotifyItem} item
     */
    deleteNotifyItem(item) {
      this.state.items = this.state.items.filter(i => i.id !== item.id)
    }
  }
}
</script>

