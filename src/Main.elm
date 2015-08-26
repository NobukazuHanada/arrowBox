module Main where

import Html exposing (text)

type Position = { x : Int, y : Int }


-- Diagram Data
type Connection =
  Apply Box Box
    | Set Box Box
    | Solo Box

type Box = IntBox { pos : Posistion, value : Int }
         | PlusBox { pos : Position }
         | Varbox String { pos : Position, name : String }


type Diagram =
  Diagram {
    connections : List Connection,
    varTable : Dict String Diagram
  }


main =
  text "Hello World"
