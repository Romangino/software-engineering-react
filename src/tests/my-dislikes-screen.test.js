/**
 * @file Implements tests for my dislikes screen
 */
import React from "react";
import {render, screen} from "@testing-library/react";
import {HashRouter} from "react-router-dom";
import Tuits from "../components/tuits";
const axios = require('axios')

const MOCK_DISLIKED_TUITS = [
    {
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
    },
    {
        _id: "234",
        tuit: "Dislike Test 2",
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
            dislikes: 234
        }
    }
]

describe('my dislikes screen renders mocked tuits that are disliked', () => {
    beforeAll(() => {
        jest.spyOn(axios, "get").mockImplementation()
    })

    afterAll(() => {
        jest.resetAllMocks()
    })

    test('dislike tuits render', async () => {
        axios.get.mockImplementation(() =>
            Promise.resolve({data: MOCK_DISLIKED_TUITS})
        )

        render(
            <HashRouter>
                <Tuits tuits={MOCK_DISLIKED_TUITS}/>
            </HashRouter>
        )

        MOCK_DISLIKED_TUITS.map(
            tuit => {
                // Expect dislikes from mocked tuits to be in document
                let dislikes = tuit.stats.dislikes.toString()
                const tuitDislikeElements = screen.getAllByText(dislikes)
                tuitDislikeElements.forEach(
                    element => expect(element).toBeInTheDocument()
                )
            }
        )

    })
})