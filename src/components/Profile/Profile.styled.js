import styled from 'styled-components';

export const ProfileInfo = styled.div`
    width: 300px;
    margin: 20px auto 0;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2), 0 16px 20px rgba(0,0,0,0.2);
`

export const Description = styled.div`
   padding: 20px;
   text-align: center;
`
export const ThumbAvatar = styled.div`
    margin: 0 auto;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
`

export const Avatar = styled.img`
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
`

export const Text = styled.p`
    font-weight: ${p => ( p.bold ? 'bold' : 'normal' )};
`

export const Stats = styled.ul`
    display: flex;
    gap: 10px;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    background: rgb(239 214 214);
`

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100px;
    padding: 10px;
    text-align: center;
    list-style: none;
`
export const StatsLabel = styled.span`
   
`

export const StatsQuantity = styled.span`
   font-weight: bold;
`