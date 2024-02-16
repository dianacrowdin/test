import { translation as baseTranslation } from '../../../src/i18n/i18n';
Ext.define("strings.sample", {
    number: 1,
    numberAsStr: '1',
    isBoolean: true,
    emptyString: "",
    doubleQuotesString: "Home",
    //main page button
    singleQuotesString: 'Back',
    entitiesString: 'Previous \u0028Control+Left\u0029',
    varString: "{0} (Пробіл)",
    graveAccentString: "It`s {0} today",
    icuString: "{gender, select, male {He uses} female {She uses} other {They use} } Crowdin.",
    regExpString: '/\\[ux]([0-9a-fA-F]{2,4})/g',
    smileString: '🥴🥴🥴',
    variableString: `This is a ${variable} test`,
    successText: name => `You successfully added ${ name } to your courses.`,
});

//object sample
var translatableObject = {
  name: 'Ross',
  gender: "male",
  age: 31,
  isPhd: 'true',
  isFriend: `false`,
};

var trArray = [ //array sample
  'Joey', "Chandler", 'Monica', `Rachel`
];
//sample for js5
;(function() {
    var define = vtex.define || window.define

    define(function() {
        return {
            shipping: {
                title: 'Delivery Address',
                errors: {
                    shippingOptions:
                        'An error occured when calculating shipping details. Please, try again.',
                },
                addressList: {
                    header: 'Choose a delivery address',
                },
                addressForm: {
                    header: 'New address',
                    postalCodeBRA: 'CEP',
                    searchForAnotherAddress: 'Search for another address',
                },
                addressSearch: {
                    address: 'Address',
                    dontKnowPostalCode: "I don't know my postal code",
                    shipsTo: 'Ship to',
                },
                countrySelect: {
                    chooseDeliveryCountry: 'Choose the delivery country',
                },
                postalCodeInput: {
                    dontUse: "The address doesn't have a postal code",
                    use: 'Add postal code',
                },
                shippingOptions: {
                    shippingOptions: 'Choose the delivery options',
                    priceFrom: 'from',
                },
                shippingSummary: {
                    shipping: 'Shipping:',
                },
            },
            validation: {
                defaultMessage: 'This value seems to be invalid.',
                type: {
                    email: 'This value should be a valid email.',
                },
                notnull: 'This value should not be null.',
            },
            countries: {
                ARG: 'Argentina',
            },
            global: {
                free: 'Free',
            },
        }
    })
})()

//sample for js6 js7
const settingsTitles = labels.menuItems

export const fertilityStatus = {
    fertile: 'fertile',
    periOvuUntilEveningText: tempRule => {
        return (
            'We detected a temperature shift (' + ['regular', '1st exception', '2nd exception'][tempRule] +
            ' temperature rule), as well as a cervical mucus/cervix shift according to NFP rules. In the evening today you may assume infertility, but ' +
            'always remember to double-check for yourself. Make sure the data makes sense to you.'
        )
    }
}

export default {
    date: {
        months: [
            `januari`,
            'februari',
            "one more februari",
            42,
            3.14,
            false,
            (size) => `Arrow: ${size && `File is ${size}. `}Do you want to download it?`,
            function (size) {
                return `Function: ${size && `File is ${size}. `}Do you want to download it?`;
            },
        ]
    }
};

const condition = true;
const logicalExpression = condition && 'true condition' && 'another condition';

const objectInLogicalExpression = condition && {
    stringLiteral: 'object string in logical expression',
    anotherStringLiteral: 'another object string in logical expression',
    templateLiteral: `object template literal in logical expression`
};

const arrayInLogicalExpression = condition && [
    'array string in logical expression',
    'another array string in logical expression',
    `array template literal in logical expression`
];