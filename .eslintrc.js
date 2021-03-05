/*
👋 Hi! This file was autogenerated by tslint-to-eslint-config.
https://github.com/typescript-eslint/tslint-to-eslint-config

It represents the closest reasonable ESLint configuration to this
project's original TSLint configuration.

We recommend eventually switching this configuration to extend from
the recommended rulesets in typescript-eslint. 
https://github.com/typescript-eslint/tslint-to-eslint-config/blob/master/docs/FAQs.md

Happy linting! 💖
*/
module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier",
        "prettier/@typescript-eslint"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "@typescript-eslint/tslint"
    ],
    "rules": {
        "@typescript-eslint/adjacent-overload-signatures": "warn",
        "@typescript-eslint/array-type": [
            "warn",
            {
                "default": "array"
            }
        ],
        "@typescript-eslint/ban-types": [
            "warn",
            {
                "types": {
                    "Object": {
                        "message": "Avoid using the `Object` type. Did you mean `object`?"
                    },
                    "Function": {
                        "message": "Avoid using the `Function` type. Prefer a specific function type, like `() => void`."
                    },
                    "Boolean": {
                        "message": "Avoid using the `Boolean` type. Did you mean `boolean`?"
                    },
                    "Number": {
                        "message": "Avoid using the `Number` type. Did you mean `number`?"
                    },
                    "String": {
                        "message": "Avoid using the `String` type. Did you mean `string`?"
                    },
                    "Symbol": {
                        "message": "Avoid using the `Symbol` type. Did you mean `symbol`?"
                    }
                }
            }
        ],
        "@typescript-eslint/class-name-casing": "warn",
        "@typescript-eslint/consistent-type-assertions": "warn",
        "@typescript-eslint/dot-notation": "warn",
        "@typescript-eslint/explicit-member-accessibility": [
            "off",
            {
                "accessibility": "explicit"
            }
        ],
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/member-delimiter-style": "off",
        "@typescript-eslint/no-empty-function": "warn",
        "@typescript-eslint/no-empty-interface": "warn",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-misused-new": "warn",
        "@typescript-eslint/no-namespace": "warn",
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/no-unused-expressions": "warn",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-var-requires": "warn",
        "@typescript-eslint/prefer-for-of": "warn",
        "@typescript-eslint/prefer-function-type": "warn",
        "@typescript-eslint/prefer-namespace-keyword": "warn",
        "@typescript-eslint/quotes": "off",
        "@typescript-eslint/semi": [
            "warn",
            "always"
        ],
        "@typescript-eslint/triple-slash-reference": [
            "warn",
            {
                "path": "always",
                "types": "prefer-import",
                "lib": "always"
            }
        ],
        "@typescript-eslint/type-annotation-spacing": "off",
        "@typescript-eslint/unified-signatures": "warn",
        "arrow-parens": [
            "off",
            "always"
        ],
        "brace-style": [
            "off",
            "off"
        ],
        "camelcase": "warn",
        "comma-dangle": "off",
        "complexity": "off",
        "constructor-super": "warn",
        "eol-last": "off",
        "eqeqeq": [
            "warn",
            "smart"
        ],
        "guard-for-in": "warn",
        "id-blacklist": [
            "warn",
            "any",
            "Number",
            "number",
            "String",
            "string",
            "Boolean",
            "boolean",
            "Undefined",
            "undefined"
        ],
        "id-match": "warn",
        "import/no-extraneous-dependencies": "off",
        "import/order": "warn",
        "jsdoc/check-alignment": "warn",
        "jsdoc/check-indentation": "warn",
        "jsdoc/newline-after-description": "warn",
        "linebreak-style": "off",
        "max-classes-per-file": "off",
        "max-len": "off",
        "new-parens": "off",
        "newline-per-chained-call": "off",
        "no-bitwise": "warn",
        "no-caller": "warn",
        "no-cond-assign": "warn",
        "no-console": "warn",
        "no-debugger": "warn",
        "no-duplicate-imports": "warn",
        "no-empty": "warn",
        "no-eval": "warn",
        "no-extra-semi": "off",
        "no-fallthrough": "off",
        "no-invalid-this": "off",
        "no-irregular-whitespace": "off",
        "no-multiple-empty-lines": "off",
        "no-new-wrappers": "warn",
        "no-redeclare": "warn",
        "no-shadow": [
            "off",
            {
                "hoist": "all"
            }
        ],
        "no-throw-literal": "warn",
        "no-trailing-spaces": "off",
        "no-undef-init": "warn",
        "no-underscore-dangle": "warn",
        "no-unsafe-finally": "warn",
        "no-unused-labels": "warn",
        "no-var": "warn",
        "object-shorthand": "warn",
        "one-var": [
            "warn",
            "never"
        ],
        "prefer-arrow/prefer-arrow-functions": "warn",
        "prefer-const": "warn",
        "quote-props": "off",
        "radix": "warn",
        "space-before-function-paren": "off",
        "space-in-parens": [
            "off",
            "never"
        ],
        "spaced-comment": [
            "warn",
            "always",
            {
                "markers": [
                    "/"
                ]
            }
        ],
        "use-isnan": "warn",
        "valid-typeof": "off",
        "@typescript-eslint/tslint/config": [
            "error",
            {
                "rules": {
                    "prettier": [
                        true,
                        "./.prettierrc"
                    ],
                    "whitespace": [
                        true,
                        "check-branch",
                        "check-operator",
                        "check-typecast"
                    ]
                }
            }
        ]
    }
};
