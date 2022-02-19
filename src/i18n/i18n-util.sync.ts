// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */

import { initFormatters } from './formatters'
import type { Locales, Translations } from './i18n-types'
import { loadedFormatters, loadedLocales, locales } from './i18n-util'

import ar from './ar'
import de from './de'
import en from './en'

const localeTranslations = {
	ar,
	de,
	en,
}

export const loadLocale = (locale: Locales) => {
	if (loadedLocales[locale]) return

	loadedLocales[locale] = localeTranslations[locale] as unknown as Translations
	loadFormatters(locale)
}

export const loadAllLocales = () => locales.forEach(loadLocale)

export const loadFormatters = (locale: Locales) => {
	loadedFormatters[locale] = initFormatters(locale)
}
