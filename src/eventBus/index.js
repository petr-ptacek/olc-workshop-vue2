import Vue from "vue";

const eventBusEvents = {
    LOADER_SHOW: "LOADER::SHOW",
    LOADER_HIDE: "LOADER::HIDE",

    NOTIFY: "NOTIFY"
}

const eventBus = new Vue({
    name: "EventBusInstance",
    data() {
        return {
            Events: eventBusEvents
        }
    }
});

export {
    eventBus,
    eventBusEvents
}