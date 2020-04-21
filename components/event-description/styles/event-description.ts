import styled from "@emotion/styled"

export const DescriptionContainer = styled.div`
  .description {
    margin-top: 20px;

    p,
    li {
      font-size: 14px;
      margin: 0;
    }

    h2 {
      margin: 0 0 10px;
      font-size: 16px;
    }

    h2#activity {
      margin-top: 20px;
    }

    img {
      width: 100%;
    }
  }

  @media screen and (min-width: 769px) {
    padding: 20px 0 50px;
    background-color: #ffc626;

    .description {
      p {
        width: 50%;

        @media screen and (min-width: 426px) {
          h2 {
            font-size: 18px;
          }
        }

        @media screen and (min-width: 769px) {
          h2 {
            font-size: 20px;
          }
        }
      }
    }
  }
`
