<template>
    <div class="plain-table-filter">
        <pl-select :input="{width:120}" class="plain-table-filter-field-select plain-table-filter-clear-right-radio" :data="data" :labelKey="labelKey" :valueKey="valueKey" :value="searchField"
                   @input="pl_changeSearchField"/>
        <div class="plain-table-filter-type plain-table-filter-clear-left-radio plain-table-filter-clear-right-radio">
            <component :is="searchData.component" :key="searchField" :filterData="filterData[searchField]" @confirm="pl_confirm" @clear="pl_clear" :col="searchData.col"/>
        </div>
        <pl-button label="查询" shape="none" class="plain-table-filter-search-button plain-table-filter-clear-left-radio" icon="pad-search" @click="pl_confirm"/>
    </div>
</template>

<script>

    import FilterInput from './item/plain-table-filter-input'
    import FilterDate from './item/plain-table-filter-date'
    import FilterNumber from './item/plain-table-filter-number'
    import FilterSelect from './item/plain-table-filter-select'
    import FilterOv from './item/plain-table-filter-ov'
    import FilterAddress from './item/plain-table-filter-address'

    const SEARCH_MAP = {
        'input': FilterInput,
        'date': FilterDate,
        'number': FilterNumber,
        'select': FilterSelect,
        'ov': FilterOv,
        'address': FilterAddress,
    }

    export default {
        name: "plain-table-filter",
        props: {
            data: {type: Array},
            labelKey: {type: String},
            valueKey: {type: String},
            searchField: {type: String},
        },
        data() {
            return {
                filterData: {},
            }
        },
        computed: {
            searchData() {
                if (!this.searchField || !this.data || this.data.length === 0) return 'input'
                let searchType;
                let col;
                for (let i = 0; i < this.data.length; i++) {
                    const item = this.data[i];
                    if (item.field === this.searchField) {
                        searchType = item.searchType
                        col = item
                    }
                }
                if (!searchType) searchType = 'input'
                if (!this.filterData[this.searchField]) this.$set(this.filterData, this.searchField, {start: null, end: null, value: null})
                return {type: searchType, component: SEARCH_MAP[searchType] || FilterInput, col}
            },
        },
        methods: {
            pl_changeSearchField(val) {
                this.$emit('searchFieldChange', val)
            },
            async pl_confirm() {
                await this.$plain.nextTick()
                const ret = {}
                ret.field = this.searchField
                ret.type = this.searchData.type
                ret.value = this.filterData[this.searchField]
                Object.keys(this.filterData).forEach(field => field !== this.searchField && (delete this.filterData[field]))
                this.$emit('filterChange', ret)
            },
            pl_clear() {
                const ret = {}
                ret.field = this.searchField
                ret.type = this.searchData.type
                ret.value = this.filterData[this.searchField]
                Object.keys(this.filterData).forEach(field => field !== this.searchField && (delete this.filterData[field]))
                this.$emit('filterChange', ret)
            },
        }
    }
</script>

<style lang="scss">
    @include themeWrap {

    }
</style>
