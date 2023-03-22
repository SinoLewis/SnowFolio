<svelte:options tag="nav-toggle" />

<script lang="ts">
</script>

<modal-dialog name="nav" esc="true">
  <a href="/">
    <button>🖥️ Projects</button>
  </a>
  <ul class="grid grid-cols-3">
    <li class="p-2 w-fit h-fit hover:scale-105 transition-transform">
      <a
        href="/projects"
        class="p-2 font-display text-base text-blue-500 border-blue-400 border rounded-md hover:drop-shadow-[0_0_9px_rgba(34,197,94,0.9)]"
        >🖥️ Projects</a
      >
    </li>
    <li class="p-2 w-fit h-fit hover:scale-105 transition-transform">
      <a
        href="/skills"
        class="p-2 font-display text-base text-red-500 border-red-400 border rounded-md hover:drop-shadow-[0_0_9px_rgba(34,197,94,0.9)]"
        >🥋 Skills</a
      >
    </li>
    <li class="p-2 w-fit h-fit hover:scale-105 transition-transform">
      <a
        href="/achievements"
        class="p-2 font-display text-base text-yellow-500 border-yellow-400 border rounded-md hover:drop-shadow-[0_0_9px_rgba(34,197,94,0.9)]"
        >🎓 Certs</a
      >
    </li>
    <li class="p-2 w-fit h-fit hover:scale-105 transition-transform">
      <a
        href="/socials"
        class="p-2 font-display text-base text-green-500 border-green-400 border rounded-md hover:drop-shadow-[0_0_9px_rgba(34,197,94,0.9)]"
        >🙋🏾‍♂️ Socials</a
      >
    </li>
    <li class="p-2 w-fit h-fit hover:scale-105 transition-transform">
      <a
        href="/tags"
        class="p-2 font-display text-base text-orange-500 border-orange-400 border rounded-md hover:drop-shadow-[0_0_9px_rgba(34,197,94,0.9)]"
        >🏷️ Tags</a
      >
    </li>
  </ul>
</modal-dialog>

<style lang="scss">
  button {
    @apply text-xs md:text-xl btn-display glow uppercase cursor-pointer shadow-md px-5 py-2 transition-all duration-150 my-0.5 hover:drop-shadow-[0_0_4px_rgba(225,225,225,0.5)];
  }
  .glow {
    @apply hover:translate-y-[-2px];
  }
  .btn-display {
    @apply font-display font-normal;
  }
  ul {
    @apply grid grid-rows-1;
  }
  li {
    @apply btn w-fit h-fit hover:scale-105 transition-transform;
  }
  a {
    @apply font-display text-base text-red-500 border-red-400 border rounded-md hover:drop-shadow-[0_0_9px_rgba(34,197,94,0.9)];
  }
</style>
