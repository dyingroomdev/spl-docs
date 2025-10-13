import overviewData from '../../spl_shield_overview.json' with { type: 'json' }

export const OVERVIEW_META = overviewData.meta
export const OVERVIEW_CONTENT = overviewData.overview

export type CoreComponent = (typeof OVERVIEW_CONTENT.core_components)[number]
export type TargetUser = (typeof OVERVIEW_CONTENT.target_users)[number]
