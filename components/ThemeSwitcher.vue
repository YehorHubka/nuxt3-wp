<template>
  <div>
    <div
      class="
        relative
        inline-block
        w-10
        mr-2
        align-middle
        select-none
        transition
        duration-200
        ease-in
      "
    >
      <input
        type="checkbox"
        name="dark-mode"
        id="dark-mode"
        value="dark"
        :checked="false"
        @click="handler"
        class="
          toggle-checkbox
          absolute
          block
          w-6
          h-6
          rounded-full
          bg-white
          border-4
          appearance-none
          cursor-pointer
        "
      /><label
        for="dark-mode"
        class="
          toggle-label
          block
          overflow-hidden
          h-6
          rounded-full
          cursor-pointer
        "
      ></label>
    </div>
    <label for="dark-mode" class="text-xs text-gray-300">Dark Mode</label>
  </div>
</template>

<script setup>
import { useThemeStore } from "@/stores/theme";
const theme = useThemeStore();
const handler = (event) => {
  theme.setTheme(event.target.checked);
};
</script>

<style scoped>
.toggle-checkbox:checked {
  --border-opacity: 1;
  border-color: #a0aec0;
  border-color: rgba(160, 174, 192, var(--border-opacity));
  right: 0;
}
.toggle-checkbox {
  right: calc(100% - 1.5rem);
  -webkit-transition: right;
  transition: right;
}
.mode-dark .toggle-checkbox {
  --border-opacity: 1;
  border-color: #718096;
  border-color: rgba(113, 128, 150, var(--border-opacity));
}
.mode-dark .toggle-checkbox:checked {
  --border-opacity: 1;
  border-color: #4a5568;
  border-color: rgba(74, 85, 104, var(--border-opacity));
}
.toggle-checkbox:focus {
  outline: none;
  -webkit-box-shadow: 0 0 0 1px #90cdf4;
  box-shadow: 0 0 0 1px #90cdf4;
}
.toggle-checkbox,
.toggle-label {
  -webkit-transition-duration: 0.1s;
  transition-duration: 0.1s;
  -webkit-transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}
.toggle-label {
  --bg-opacity: 1;
  background-color: #e2e8f0;
  background-color: rgba(226, 232, 240, var(--bg-opacity));
}
.mode-dark .toggle-label {
  --bg-opacity: 1;
  background-color: #718096;
  background-color: rgba(113, 128, 150, var(--bg-opacity));
}
.toggle-checkbox:checked + .toggle-label {
  --bg-opacity: 1;
  background-color: #a0aec0;
  background-color: rgba(160, 174, 192, var(--bg-opacity));
}
.mode-dark .toggle-checkbox:checked + .toggle-label {
  --bg-opacity: 1;
  background-color: #4a5568;
  background-color: rgba(74, 85, 104, var(--bg-opacity));
}
</style>