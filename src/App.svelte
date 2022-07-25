<script lang="ts">

  import Homepage from "./routes/homepage.svelte";
  import Slovnicek from "./routes/slovnicek.svelte";

  const routes = [
    {
      name: "/~janoska/",
      component: Homepage,
    },
    {
      name: "/~janoska/slovnicek",
      component: Slovnicek,
    },
  ];

  import { Router } from 'svelte-router-spa'
</script>

<Router {routes} />