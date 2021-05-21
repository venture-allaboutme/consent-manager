import React from 'react'
import { Pane, Button } from 'evergreen-ui'
import { storiesOf } from '@storybook/react'
import ConsentManager from '../src/consent-manager'
import * as common from './components/common-react'
import { openConsentManager } from '../src'
import CookieView from './components/CookieView'

const initialPreferences = {
  advertising: false,
  marketingAndAnalytics: false,
  functional: false
}

const Custom = () => {
  return (
    <Pane maxWidth={1000} margin={30}>
      <ConsentManager
        writeKey="tYQQPcY78Hc3T1hXUYk0n4xcbEHnN7r0"
        initialPreferences={initialPreferences}
        shouldRequireConsent={() => true}
        bannerHeading={
          <>
            Diese Cookies{' '}
            <span role="img" aria-label="cookie">
              🍪
            </span>{' '}
            haben null Kalorien.
          </>
        }
        {...common}
      />

      <Button marginRight={20} onClick={openConsentManager}>
        Change Cookie Preferences
      </Button>

      <CookieView />
    </Pane>
  )
}

storiesOf('Heading', module).add(`Basic`, () => <Custom />)
