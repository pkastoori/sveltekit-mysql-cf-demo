<script lang="ts">
  import { enhance } from "$app/forms";
</script>

<h1>Add Note</h1>

<form method="post" class="form" use:enhance>
  <input type="text" name="title" placeholder="Title..." id="title" />
  <textarea
    name="content"
    id="content"
    placeholder="Content..."
    rows="10"
    cols="30"
  />
  <button type="submit">Add</button>
</form>

<style>
  .form {
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 95%;
    margin-inline: auto;
  }

  input {
    padding: 6px;
    font-size: 16px;
  }
  textarea {
    padding: 6px;
    font-size: 16px;
  }
  input:focus {
    outline: none;
  }
  textarea:focus {
    outline: none;
  }
  button {
    background-color: black;
    color: white;
    padding-inline: 6px;
    padding-block: 10px;
    border-radius: 4px;
    font-size: 18px;
    width: 50%;
    margin-inline: auto;
  }
</style>
