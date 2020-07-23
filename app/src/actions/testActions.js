import { TEST_ACTION } from "../constants/testConstants"

export function testAction() {
    return {
        type: TEST_ACTION,
        payload: "MY TEST PAYLOAD",
    }
}
