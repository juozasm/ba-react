import { TEST_ACTION } from "./testTypes"

export function testAction() {
    return {
        type: TEST_ACTION,
        payload: "MY TEST PAYLOAD",
    }
}
