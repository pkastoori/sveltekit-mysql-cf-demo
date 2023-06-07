<script lang="ts">
  export let data;
</script>

<div class="header">
  <h1>Welcome to MyNotes</h1>
  <a href="/add">Add Note</a>
</div>

{#each data.notes as note}
  <h4>{note.title}</h4>
  <p>{note.content}</p>
{/each}

<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  a {
    text-decoration: none;
    background-color: black;
    color: white;
    padding-inline: 18px;
    padding-block: 10px;
    border-radius: 4px;
  }
</style>
