<script lang="ts" setup>
import { dragAppend, dragEnd, dragStart } from '@/lib/global/drag'
import { isPropertyMode } from '@/lib/global/variables'
import { useRerender } from '@/lib/reactive/render-vue'
import { htmlDictionary } from '@/lib/tags/tags'
import { ref } from 'vue'

const tags = htmlDictionary
const [filter, setFilter] = useRerender<typeof htmlDictionary>(tags)

const searchQuery = ref('')

const handleFilter = () => {
  const cleanQuery = searchQuery.value.toLowerCase().trim()

  if (!cleanQuery) {
    setFilter(tags)
    return
  }

  const filtered = tags
    .map((section) => ({
      ...section,
      tags: section.tags.filter((item) => item.tag.toLowerCase().includes(cleanQuery)),
    }))
    .filter((section) => section.tags.length > 0)

  setFilter(filtered)
}
</script>

<template>
  <aside class="inspection">
    <div class="title-cnt">
      <h2 class="title">{{ isPropertyMode ? 'Properties' : 'Tags' }}</h2>
    </div>
    <div class="search-cnt">
      <!-- 3. Replaced raw event pulling with two-way v-model binding -->
      <input
        v-model="searchQuery"
        type="search"
        class="searc-inp"
        placeholder="Search..."
        @input="handleFilter"
      />
    </div>
    <ul class="tags-cnt" v-if="!isPropertyMode">
      <section class="sec" v-for="(section, idx) in filter" :key="idx">
        <div class="sec-title-cnt">
          <h3 class="sec-title">{{ section.section }}</h3>
        </div>
        <div class="tags-inner-cnt" v-for="(tag, indx) in section.tags" :key="indx">
          <li
            class="tags"
            draggable="true"
            @dragend="(e) => dragEnd(e)"
            @dragstart="() => dragStart()"
            @drag="(e) => dragAppend(e)"
          >
            <div class="tg-ic">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                width="100%"
                height="100%"
              >
                <path
                  d="M 35,25 L 10,50 L 35,75 M 65,25 L 90,50 L 65,75 M 58,20 L 42,80"
                  stroke="currentColor"
                  stroke-width="8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                />
              </svg>
            </div>
            <div class="cnt">
              <h4 class="tag-name">{{ tag.tag }}</h4>
              <p class="tag-desc">{{ tag.desc }}</p>
            </div>
          </li>
        </div>
      </section>
    </ul>
  </aside>
</template>

<style lang="css" scoped>
/* Your CSS rules remain exactly the same and correct */
.inspection {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.4rem;
  border-radius: 0.4rem;
  border: 1px solid var(--border-cl);
  gap: 0.5rem;
  background: var(--component-cl);
  position: fixed;
  top: 7%;
  right: 10px;
  width: 400px;
  max-width: 400px;
  height: 90%;
  box-sizing: border-box;
}
.title-cnt {
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid var(--border-cl);
  width: 100%;
  padding: 0.5rem;
}
.title {
  color: grey;
  font-size: var(--fs-sm);
  margin: 0;
}

.search-cnt {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
}
.searc-inp {
  display: flex;
  width: 90%;
  padding: 0.5rem;
  border: 1px solid var(--border-cl);
  font-size: var(--fs-sm);
  border-radius: 1rem;
  background-color: transparent;
  outline: none;
  color: var(--text-cl);
}
.tags-cnt {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0.5rem;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  flex: 1;
  list-style: none;
}

.sec {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.sec-title-cnt {
  display: flex;
  gap: 1rem;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid var(--border-cl);
}
.sec-title {
  color: grey;
  font-size: var(--fs-xs);
  margin: 0;
}

.tags-inner-cnt {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.tags-inner-cnt li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-radius: 0.6rem;
  padding: 0.5rem;
  width: 100%;
  user-select: none;

  border: 1px solid transparent;
  background-image:
    linear-gradient(var(--bg-cl), var(--bg-cl)),
    linear-gradient(to right, rgba(255, 68, 0, 0.245), rgba(255, 166, 0, 0.216));
  background-clip: padding-box, border-box;

  background-origin: padding-box, border-box;
}

.tg-ic {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  min-width: 32px;
  min-height: 32px;
  border-radius: 0.25rem;
  background: var(--border-cl);
  color: var(--button-cl);
  padding: 0.25rem;
}

.cnt {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  flex: 1;
  min-width: 0;
}

.tag-name {
  color: var(--text-cl);
  font-size: var(--fs-sm);
  font-weight: 600;
  margin: 0;
  color: antiquewhite;
}

.tag-desc {
  color: var(--text-muted-cl);
  font-size: var(--fs-xs);
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
