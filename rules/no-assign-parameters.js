/**
 * @fileoverview Disallow assignment to parameters
 * @author Mitchell Van Der Hoeff <mitchellvanderhoeff@gmail.com>
 */

"use strict";


module.exports = {
    meta: {
        docs: {
            recommended: false,
            type: "error",
            description: "Disallow assignment to parameters"
        },

        schema: []
    },

    create: function(context) {
        function inspectAssignmentExpression(emitted) {
            if (emitted.exit) {
                return;
            }
            var node = emitted.node;

            console.log(node);
        }

        function inspectFunctionDeclaration(emitted) {
            if (emitted.exit) {
                return;
            }
            var node = emitted.node;

            console.log(node);
        }

        return {
            AssignmentExpression: inspectAssignmentExpression,
            FunctionDeclaration: inspectFunctionDeclaration
        };
    }
};
