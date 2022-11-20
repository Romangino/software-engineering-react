/**
 * @file Implements tests for dislike button
 */
import React from "react";
import {render, screen} from "@testing-library/react";
import {HashRouter} from "react-router-dom";
import Tuit from "../components/tuits/tuit";

const MOCK_DISLIKED_TUIT = {
    _id: "123",
    tuit: "Dislike Test 1",
    postedBy: {
        _id: "000000000000000000000001",
        username: "alice",
        password: "123",
        email: "alice@wonderland.com"
    },
    stats: {
        replies: 0,
        retuits: 0,
        likes: 0,
        dislikes: 123
    }
}

describe('render dislike button with mocked tuit', () => {
    render(
        <HashRouter>
            <Tuit tuit={MOCK_DISLIKED_TUIT}/>
        </HashRouter>
    )

    test('dislike tuits render', () => {
        // Expect dislikes from mocked tuits to be in document
        const dislikes = screen.getByText(MOCK_DISLIKED_TUIT.stats.dislikes)
        expect(dislikes).toBeInTheDocument()

    })
})