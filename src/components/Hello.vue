<script>
import { QTabs, QTab, QTabPane } from 'quasar'

export default {
  components: {
    QTabs,
    QTabPane,
    QTab
  }
}
</script>

<template>
  <q-tabs>
    <q-tab default slot="title" name="tab-money" icon="attach_money" />
    <q-tab slot="title" name="tab-3" icon="send" />
    <q-tab slot="title" name="tab-4" icon="play_for_work" />
    <q-tab slot="title" name="tab-5" icon="build" />
    <!-- Targets -->
    <q-tab-pane name="tab-money">Tab Two</q-tab-pane>
    <q-tab-pane name="tab-3">Tab Three</q-tab-pane>
    <q-tab-pane name="tab-4">Tab Four</q-tab-pane>
    <q-tab-pane name="tab-5">Tab Five</q-tab-pane>
  </q-tabs>
</template>

<style scoped>

</style>
